const Footer = () => {
  return (
    <footer className="w-full min-h-min border-t border-slate-200 bg-slate-100 px-6 py-5 text-center text-sm text-slate-500">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p>GameStore &copy; {new Date().getFullYear()} - Todos os direitos reservados</p>

        <div className="flex items-center gap-4 font-semibold">
          <a className="transition hover:text-cyan-700" href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="transition hover:text-cyan-700" href="https://www.facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a className="transition hover:text-cyan-700" href="https://www.youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
