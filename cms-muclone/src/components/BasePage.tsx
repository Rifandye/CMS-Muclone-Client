export default function BasePage({ children }: { children?: React.ReactNode }) {
  return (
    <main className="tw-p-8 tw-flex tw-flex-col tw-h-max tw-rounded-lg">
      {children}
    </main>
  );
}
