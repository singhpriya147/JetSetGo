
import Header from "@/components/Header";

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header/>
        {children}
   
    </section>
  );
}
