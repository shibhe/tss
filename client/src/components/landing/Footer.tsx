export default function Footer() {
  return (
    <footer className="bg-muted/50 py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/logo.png" alt="Tivane Software Solutions" className="h-10 w-auto" />
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            &copy; {new Date().getFullYear()} T.S.S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
