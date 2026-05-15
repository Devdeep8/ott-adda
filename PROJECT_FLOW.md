# Project Flow Documentation

## Project Overview
This is a **Full-Stack Invoicing & Billing System** built with Next.js (frontend) and Node.js/Express (backend). The system allows businesses to create, manage, send, and track invoices with integrated payment processing capabilities.

---

## Architecture Overview

### Frontend (user-frontend)
- **Framework**: Next.js 16.2.3 with React 19
- **Language**: TypeScript
- **UI Components**: Shadcn UI (Radix UI based)
- **State Management**: React Hooks
- **HTTP Client**: Axios with interceptors
- **Authentication**: Cookie-based (httpOnly cookies)

### Backend (user-backend)
- **Framework**: Express.js
- **Language**: JavaScript (ES6 modules)
- **Database**: PostgreSQL with Prisma ORM
- **Cache**: Redis (session management, token storage)
- **Authentication**: JWT with token rotation
- **Password Hashing**: bcryptjs

---

## Complete User Flow

### 1. User Registration Flow

**Frontend → Backend Flow:**
1. **User Action**: User fills registration form on `/register` page
2. **Frontend Service**: `authService.register()` → `POST /api/v1/user/register`
3. **Backend Route**: `/api/v1/user/register` → `UserController.register()`
4. **Backend Service**: `RegisterService.execute()`
   - Validates email format and password length (min 8 chars)
   - Checks if email already exists in database
   - Hashes password using bcrypt
   - Creates user in PostgreSQL database
   - Generates JWT access token (15min expiry) and refresh token (7 days expiry)
   - Stores refresh token and user session in Redis
   - Sets httpOnly cookies with both tokens
5. **Response**: Returns user data (without password) and tokens
6. **Frontend**: Redirects to `/onboarding` page

**Key Files:**
- Frontend: `user-frontend/src/app/(auth)/register/page.tsx`
- Frontend Service: `user-frontend/src/services/auth.service.ts`
- Backend Controller: `user-backend/src/rest-resources/controllers/user.controller.js`
- Backend Service: `user-backend/src/services/auth/register.service.js`

---

### 2. User Login Flow

**Frontend → Backend Flow:**
1. **User Action**: User fills login form on `/login` page
2. **Frontend Service**: `authService.login()` → `POST /api/v1/user/login`
3. **Backend Route**: `/api/v1/user/login` → `UserController.login()`
4. **Backend Service**: `LoginService.execute()`
   - Validates email and password presence
   - Finds user by email in database
   - Checks if user account is active
   - Verifies password using bcrypt compare
   - Generates JWT access and refresh tokens
   - Stores tokens in Redis
   - Sets httpOnly cookies
5. **Response**: Returns user data and tokens
6. **Frontend**: Redirects to `/dashboard`

**Authentication Middleware Flow:**
For all protected routes:
1. Checks for `accessToken` in cookies or Authorization header
2. If valid → Gets user from Redis cache (zero DB calls)
3. If expired → Uses `refreshToken` to generate new tokens
4. Implements token rotation for security
5. Injects `userId`, `user`, and `businessId` into request context

**Key Files:**
- Frontend: `user-frontend/src/app/(auth)/login/page.tsx`
- Frontend Service: `user-frontend/src/services/auth.service.ts`
- Backend Controller: `user-backend/src/rest-resources/controllers/user.controller.js`
- Backend Service: `user-backend/src/services/auth/login.service.js`
- Backend Middleware: `user-backend/src/rest-resources/middlewares/auth.middleware.js`

---

### 3. Business Onboarding Flow

**Frontend → Backend Flow:**
1. **User Action**: After registration, user completes 3-step onboarding
2. **Step 1**: Business name and phone
3. **Step 2**: Address details (optional, can skip)
4. **Step 3**: Bank details (optional, can skip)
5. **Frontend Service**: `businessService.create()` → `POST /api/v1/business`
6. **Backend Route**: `/api/v1/business` → `BusinessController.create()`
7. **Backend Service**: `CreateBusinessService.execute()`
   - Validates required fields (business name)
   - Creates business record linked to user ID
   - Stores business details (name, address, bank info, UPI, tax settings)
   - Sets default values (currency: INR, invoice prefix: INV)
8. **Response**: Returns created business object
9. **Frontend**: Redirects to `/dashboard`

**Key Files:**
- Frontend: `user-frontend/src/app/onboarding/page.tsx`
- Frontend Service: `user-frontend/src/services/business.service.ts`
- Backend Controller: `user-backend/src/rest-resources/controllers/business.controller.js`
- Backend Service: `user-backend/src/services/business/createbusiness.service.js`

---

### 4. Client Management Flow

#### Create Client
**Frontend → Backend Flow:**
1. **User Action**: User fills client creation form
2. **Frontend Service**: `clientService.create()` → `POST /api/v1/clients`
3. **Backend Route**: `/api/v1/clients` → `ClientController.create()`
4. **Backend Service**: `CreateClientService.execute()`
   - Validates name and email format
   - Checks if client email already exists for this business
   - Creates client linked to business ID
   - Stores client details (name, email, phone, address, GSTIN)
5. **Response**: Returns created client object

#### List Clients
1. **Frontend Service**: `clientService.list()` → `GET /api/v1/clients`
2. **Backend Route**: `GET /api/v1/clients` → `ClientController.list()`
3. **Backend Service**: `GetClientsService.execute()`
   - Filters clients by business ID (from context)
   - Returns all clients for authenticated user's business

#### Update Client
1. **Frontend Service**: `clientService.update()` → `PUT /api/v1/clients/:id`
2. **Backend Route**: `PUT /api/v1/clients/:id` → `ClientController.update()`
3. **Backend Service**: `UpdateClientService.execute()`
   - Validates ownership (client must belong to user's business)
   - Updates client details

#### Delete Client
1. **Frontend Service**: `clientService.delete()` → `DELETE /api/v1/clients/:id`
2. **Backend Route**: `DELETE /api/v1/clients/:id` → `ClientController.delete()`
3. **Backend Service**: `DeleteClientService.execute()`
   - Validates ownership
   - Deletes client (cascade deletes related invoices)

**Key Files:**
- Frontend Service: `user-frontend/src/services/client.service.ts`
- Backend Controller: `user-backend/src/rest-resources/controllers/client.controller.js`
- Backend Services: `user-backend/src/services/client/*.js`

---

### 5. Invoice Management Flow

#### Create Invoice
**Frontend → Backend Flow:**
1. **User Action**: User fills invoice creation form with line items
2. **Frontend Service**: `invoiceService.create()` → `POST /api/v1/invoices`
3. **Backend Route**: `/api/v1/invoices` → `InvoiceController.create()`
4. **Backend Service**: `CreateInvoiceService.execute()`
   - Validates required fields (client, dates, items)
   - Verifies client belongs to user's business
   - Generates invoice number using business prefix and next number
   - Calculates amounts:
     - Subtotal = sum(quantity × rate) for all items
     - Tax Amount = Subtotal × Tax Rate
     - Total = Subtotal + Tax Amount - Discount
   - Creates invoice in database (transaction)
   - Creates invoice items
   - Increments business's next invoice number
   - Creates "CREATED" event
   - Optionally triggers send event if `sendNow` is true
5. **Response**: Returns created invoice with items and client details

#### List Invoices
1. **Frontend Service**: `invoiceService.list()` → `GET /api/v1/invoices`
2. **Backend Route**: `GET /api/v1/invoices` → `InvoiceController.list()`
3. **Backend Service**: `GetInvoicesService.execute()`
   - Filters by business ID
   - Supports optional filters (status, page, limit)
   - Returns paginated list with items, client, and business details

#### Get Invoice by ID
1. **Frontend Service**: `invoiceService.getById()` → `GET /api/v1/invoices/:id`
2. **Backend Route**: `GET /api/v1/invoices/:id` → `InvoiceController.getById()`
3. **Backend Service**: `GetInvoiceByIdService.execute()`
   - Validates ownership
   - Returns full invoice with items, client, and business details

#### Update Invoice
1. **Frontend Service**: `invoiceService.update()` → `PUT /api/v1/invoices/:id`
2. **Backend Route**: `PUT /api/v1/invoices/:id` → `InvoiceController.update()`
3. **Backend Service**: `UpdateInvoiceService.execute()`
   - Validates ownership and invoice status (can only update DRAFT)
   - Recalculates amounts
   - Updates invoice items (deletes old, creates new)
   - Creates "UPDATED" event

#### Delete Invoice
1. **Frontend Service**: `invoiceService.delete()` → `DELETE /api/v1/invoices/:id`
2. **Backend Route**: `DELETE /api/v1/invoices/:id` → `InvoiceController.delete()`
3. **Backend Service**: `DeleteInvoiceService.execute()`
   - Validates ownership
   - Soft deletes invoice (sets deletedAt timestamp)

#### Send Invoice
1. **Frontend Service**: `invoiceService.send()` → `POST /api/v1/invoices/:id/send`
2. **Backend Route**: `POST /api/v1/invoices/:id/send` → `InvoiceController.send()`
3. **Backend Service**: `SendInvoiceService.execute()`
   - Validates ownership
   - Updates invoice status to SENT
   - Generates email with invoice link
   - Creates email log entry
   - Emits "invoice.send" event (handled by background service)
   - Creates "SENT" event

#### Update Invoice Status
1. **Frontend Service**: `invoiceService.updateStatus()` → `PATCH /api/v1/invoices/:id/status`
2. **Backend Route**: `PATCH /api/v1/invoices/:id/status` → `InvoiceController.updateStatus()`
3. **Backend Service**: `UpdateInvoiceStatusService.execute()`
   - Validates ownership
   - Updates invoice status
   - Creates event for status change

**Key Files:**
- Frontend Service: `user-frontend/src/services/invoice.service.ts`
- Backend Controller: `user-backend/src/rest-resources/controllers/invoice.controller.js`
- Backend Services: `user-backend/src/services/invoice/*.js`

---

### 6. Invoice Tracking & Public View Flow

**Public Flow (No Authentication Required):**
1. **Client Action**: Client clicks invoice link from email
2. **Frontend**: Navigates to `/invoice/[publicId]`
3. **Frontend Service**: `invoiceService.getPublicInvoice()` → `GET /api/v1/track/invoice/view/:publicId`
4. **Backend Route**: `/api/v1/track/invoice/view/:publicId` → `TrackingController.trackInvoiceView()`
5. **Backend Logic**:
   - Finds invoice by public ID (no auth required)
   - Checks if link has expired
   - If first view:
     - Updates `viewedAt` timestamp
     - Creates "VIEWED" event with actor type "CLIENT"
   - Returns full invoice with business and client details
6. **Frontend**: Renders invoice page with print functionality
   - Displays business logo, details, and GSTIN
   - Shows client information
   - Lists all line items with quantities and amounts
   - Shows totals (subtotal, tax, discount, total)
   - Displays notes and terms
   - Provides print button

**Tracking Features:**
- Each invoice has a unique `publicId` (cuid format)
- Link expiration can be set via `publicIdExpiresAt`
- Tracks when invoice was first viewed
- Records all events (CREATED, SENT, VIEWED, EMAIL_OPENED, PAYMENT_RECEIVED)
- Email opening tracked via pixel or link tracking

**Key Files:**
- Frontend Page: `user-frontend/src/app/invoice/[publicId]/page.tsx`
- Backend Controller: `user-backend/src/rest-resources/controllers/tracking.controller.js`
- Backend Route: `user-backend/src/rest-resources/routes/api/v1/tracking.routes.js`

---

## Database Schema Overview

### Core Models

#### User
- `id`, `email`, `password`, `role`, `authProvider`
- Links to Business (one-to-one)
- Authentication state managed via Redis

#### Business
- Links to User (one-to-one)
- Business details: name, address, phone, website, tax ID
- Invoice defaults: currency, tax rate, invoice prefix, next invoice number
- Payment details: UPI ID, bank account, IFSC, Razorpay credentials
- Links to Clients, Invoices, Email Logs, Events

#### Client
- Links to Business (many-to-one)
- Client details: name, email, phone, address, GSTIN
- Links to Invoices and Payments

#### Invoice
- Links to Business and Client
- Invoice details: number, status, dates, amounts
- Tracking fields: publicId, viewedAt, sentAt, emailOpenedAt
- Links to Items, Payments, Email Logs, Events

#### InvoiceItem
- Links to Invoice (many-to-one)
- Line item details: description, quantity, rate, amount

#### Payment
- Links to Invoice, Business, Client
- Payment details: amount, method, reference, Razorpay payment ID
- Tracks payment date and status

#### EmailLog
- Links to Invoice and Business
- Email details: recipient, status, sent/opened timestamps
- Retry logic with attempt count and next retry time

#### InvoiceEvent
- Links to Invoice and Business
- Event details: type, actor type, actor ID, metadata
- Tracks all invoice lifecycle events

---

## Security & Authentication

### Token Strategy
- **Access Token**: 15 minutes expiry, stored in httpOnly cookie
- **Refresh Token**: 7 days expiry, stored in Redis and httpOnly cookie
- **Token Rotation**: New tokens generated on each refresh
- **Session Management**: User session cached in Redis for 7 days

### Cookie Configuration
- httpOnly: true (prevents XSS attacks)
- secure: true in production, false in development
- sameSite: 'none' in production, 'lax' in development
- Path: '/'

### Password Security
- Hashed using bcrypt with configurable salt rounds
- Minimum 8 characters required

### Request Flow for Protected Routes
1. Request arrives with access token
2. Auth middleware validates token
3. If valid → get user from Redis (fast path)
4. If expired → use refresh token to generate new pair
5. New tokens set in response cookies
6. User context injected into request
7. Route handler processes request with context

---

## API Response Structure

All API responses follow this format:
```typescript
{
  success: boolean
  message: string
  data: any
  locale: string
  timestamp: string
}
```

Error responses:
```typescript
{
  success: false
  error: {
    code: string
    message: string
    details?: any
  }
}
```

---

## API Routes Summary

### Authentication Routes (`/api/v1/user`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /me` - Get current user (protected)

### Business Routes (`/api/v1/business`)
- `POST /` - Create business (protected)

### Client Routes (`/api/v1/clients`)
- `GET /` - List clients (protected)
- `POST /` - Create client (protected)
- `GET /:id` - Get client by ID (protected)
- `PUT /:id` - Update client (protected)
- `DELETE /:id` - Delete client (protected)

### Invoice Routes (`/api/v1/invoices`)
- `GET /` - List invoices (protected)
- `POST /` - Create invoice (protected)
- `GET /:id` - Get invoice by ID (protected)
- `PUT /:id` - Update invoice (protected)
- `DELETE /:id` - Delete invoice (protected)
- `POST /:id/send` - Send invoice (protected)
- `PATCH /:id/status` - Update invoice status (protected)

### Tracking Routes (`/api/v1/track`)
- `GET /invoice/view/:publicId` - View public invoice (public, no auth)

---

## Event System

The system uses an event-driven architecture for background processing:

### Events Emitted
- `invoice.send` - Triggered when invoice is sent
- `invoice.email.opened` - Triggered when email is opened
- `invoice.payment.received` - Triggered when payment is received

### Event Listeners
- `InvoiceEventListener` - Handles invoice-related events
  - Processes email sending
  - Updates email logs
  - Handles retry logic
  - Records events in database

**Key Files:**
- Event Emitter: `user-backend/src/events/app-events.js`
- Event Listener: `user-backend/src/services/invoice/invoice-event.listener.js`

---

## Frontend Pages Structure

### Auth Pages (`/app/(auth)`)
- `/login` - Login page
- `/register` - Registration page

### Onboarding Pages (`/app/onboarding`)
- `/onboarding` - 3-step business creation flow

### Dashboard Pages (`/app/(dashboard)`)
- `/dashboard` - Main dashboard (currently placeholder)

### Public Pages
- `/invoice/[publicId]` - Public invoice view page

---

## Configuration Files

### Backend Configuration
- `app.config.js` - Application configuration using convict
- Environment variables loaded from `.env`
- Database connection via Prisma
- Redis connection configuration

### Frontend Configuration
- `next.config.ts` - Next.js configuration
- `.env.local` - Environment variables (API_BASE_URL)
- `tsconfig.json` - TypeScript configuration

---

## Current State Assessment

### ✅ Working Features
1. User registration and login with JWT authentication
2. Token rotation with Redis caching
3. Business onboarding flow
4. Client CRUD operations
5. Invoice CRUD operations with calculations
6. Invoice public sharing and tracking
7. Invoice status management
8. Email sending infrastructure (events/listeners)
9. Database schema with proper relationships
10. API response structure with error handling

### ⚠️ Potential Issues/Improvements Needed

1. **Dashboard is Empty**: The `/dashboard` page is just a placeholder
   - Need to implement dashboard with:
     - Recent invoices list
     - Invoice statistics (total sent, paid, overdue)
     - Quick actions (create invoice, add client)
     - Revenue charts/visualizations

2. **Missing Invoice Creation UI**: No visible form/page to create invoices
   - Need invoice creation page with:
     - Client selection dropdown
     - Line item editor (add/remove items)
     - Date pickers
     - Notes and terms fields
     - Real-time calculations

3. **Missing Client Management UI**: No visible client management page
   - Need client list page with:
     - Table/grid view of clients
     - Add/Edit client modals
     - Delete confirmation
     - Search and filter

4. **Email Service Not Implemented**: Event listener exists but email sending logic is missing
   - Need to integrate email service (SendGrid, AWS SES, etc.)
   - Implement email templates
   - Handle email tracking

5. **Payment Integration Not Complete**: Razorpay fields exist in schema but no integration
   - Need Razorpay payment link generation
   - Payment status updates
   - Payment verification

6. **Invoice Status Updates**: No UI for updating invoice status after creation
   - Need status update interface
   - Maybe auto-update based on payments

7. **Error Handling in Frontend**: Basic error handling exists but could be improved
   - Better error messages
   - Retry mechanisms
   - Loading states

8. **Form Validations**: Some validations exist but could be more comprehensive
   - Client-side validation
   - Better error display

9. **Responsive Design**: Basic layout exists but needs testing on mobile
   - Invoice view page looks good but needs mobile optimization
   - Dashboard needs responsive design

10. **User Logout**: No visible logout button or functionality
    - Need logout implementation
    - Clear cookies and redirect to login

---

## Next Steps Recommendations

### Priority 1 - Core Functionality
1. Build invoice creation page with line item editor
2. Build client management page (list, add, edit, delete)
3. Build main dashboard with invoice list and statistics
4. Implement email sending service

### Priority 2 - Enhanced Features
5. Add invoice editing capability
6. Implement invoice status update UI
7. Add invoice filtering and search
8. Build invoice history/timeline view

### Priority 3 - Advanced Features
9. Integrate Razorpay payment links
10. Add payment status tracking
11. Implement email template system
12. Add analytics and reporting

### Priority 4 - UX Improvements
13. Add loading states and better error handling
14. Implement logout functionality
15. Add confirmations for destructive actions
16. Improve responsive design

---

## Testing Scenarios

### Authentication Flow
- [ ] User can register with valid email and password
- [ ] User cannot register with existing email
- [ ] User can login with correct credentials
- [ ] User cannot login with wrong credentials
- [ ] Tokens are set correctly in cookies
- [ ] Protected routes redirect to login if not authenticated
- [ ] Token rotation works on expiry

### Business Flow
- [ ] User completes onboarding after registration
- [ ] Business details are saved correctly
- [ ] User can skip optional steps
- [ ] Business details appear in dashboard

### Client Flow
- [ ] User can add new client
- [ ] User cannot add duplicate client email
- [ ] User can view client list
- [ ] User can edit client details
- [ ] User can delete client
- [ ] Deleted client's invoices are handled correctly

### Invoice Flow
- [ ] User can create new invoice
- [ ] Invoice calculations are correct
- [ ] Invoice number is generated properly
- [ ] User can view invoice list
- [ ] User can view single invoice
- [ ] User can edit draft invoice
- [ ] User cannot edit sent/paid invoice
- [ ] User can delete invoice
- [ ] Invoice can be sent via email

### Invoice Tracking Flow
- [ ] Public invoice link works without auth
- [ ] Invoice page displays correctly
- [ ] First view is tracked
- [ ] Print functionality works
- [ ] Expired link shows appropriate message

### Error Handling
- [ ] API errors are displayed to user
- [ ] Network errors are handled gracefully
- [ ] Validation errors are shown correctly
- [ ] Loading states are shown during requests

---

## File Structure Summary

### Backend (user-backend)
```
user-backend/
├── src/
│   ├── configs/           # Configuration files
│   ├── errors/            # Error classes and codes
│   ├── events/            # Event emitter
│   ├── helpers/           # Helper functions (auth, cookies, response)
│   ├── lib/               # Database and Redis connections
│   ├── prisma/            # Database schema and migrations
│   ├── rest-resources/    # Routes, controllers, middlewares
│   │   ├── controllers/   # Request handlers
│   │   ├── middlewares/   # Auth, context, error handling
│   │   └── routes/        # API route definitions
│   ├── services/          # Business logic
│   │   ├── auth/          # Authentication services
│   │   ├── business/      # Business services
│   │   ├── client/        # Client services
│   │   ├── invoice/       # Invoice services
│   └── constants/         # Redis keys, etc.
├── index.js               # Server entry point
└── package.json
```

### Frontend (user-frontend)
```
user-frontend/
├── src/
│   ├── app/               # Next.js app router pages
│   │   ├── (auth)/        # Authentication pages
│   │   ├── (dashboard)/   # Dashboard pages
│   │   ├── onboarding/    # Business creation
│   │   └── invoice/       # Public invoice view
│   ├── components/        # UI components
│   │   ├── auth/          # Auth forms
│   │   └── ui/            # Shadcn components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── services/          # API services
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
├── package.json
└── next.config.ts
```

---

## Environment Variables Required

### Backend (.env)
```
# Database
DATABASE_URL=postgresql://...

# Redis
REDIS_URL=redis://...

# JWT
JWT_SECRET=...
JWT_REFRESH_SECRET=...

# App
PORT=3001
NODE_ENV=development

# Email (when implemented)
SMTP_HOST=...
SMTP_PORT=...
SMTP_USER=...
SMTP_PASS=...

# Razorpay (when implemented)
RAZORPAY_KEY_ID=...
RAZORPAY_KEY_SECRET=...
```

### Frontend (.env.local)
```
API_BASE_URL=http://localhost:3001
```

---

## Running the Application

### Backend
```bash
cd user-backend
npm install
npm run dev  # Runs on port 3001
```

### Frontend
```bash
cd user-frontend
npm install
npm run dev  # Runs on port 3000
```

---

## Summary

This is a well-architected invoicing system with:
- ✅ Solid authentication with JWT and Redis
- ✅ Clean separation of concerns (controllers, services, routes)
- ✅ Proper database design with relationships
- ✅ Event-driven architecture for background tasks
- ✅ Public invoice sharing and tracking
- ✅ Responsive frontend with modern UI components

**What's Missing:**
- ⚠️ Dashboard implementation
- ⚠️ Invoice creation UI
- ⚠️ Client management UI
- ⚠️ Email service integration
- ⚠️ Payment integration
- ⚠️ Better error handling and loading states
- ⚠️ Logout functionality
- ⚠️ Invoice editing UI

The foundation is solid, but the user-facing pages and some backend integrations need to be completed to have a fully functional application.
