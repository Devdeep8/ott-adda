import UserComponent from "@/components/user-component";

export const dynamic = 'force-dynamic'  // ← this is the correct fix

export default function UserPage() {
  return (
    <div className="mt-4">
        <UserComponent/>
    </div>
  );
}