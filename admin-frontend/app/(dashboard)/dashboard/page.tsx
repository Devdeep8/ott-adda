export default function Dashboard() {
  return (
    <div className="grid gap-6">
      <div className="bg-card border border-border p-6 rounded-xl">
        <h1 className="text-2xl font-heading font-bold text-foreground mb-2">Welcome Back.</h1>
        <p className="text-sm text-muted-foreground">Select an option from the sidebar to continue.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border p-6 rounded-xl aspect-video flex items-center justify-center">
          <span className="text-xs tracking-widest uppercase text-muted-foreground font-medium">Analytics Placeholder</span>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl aspect-video flex items-center justify-center">
          <span className="text-xs tracking-widest uppercase text-muted-foreground font-medium">Activity Placeholder</span>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl aspect-video flex items-center justify-center">
          <span className="text-xs tracking-widest uppercase text-muted-foreground font-medium">Quick Actions</span>
        </div>
      </div>
    </div>
  );
}