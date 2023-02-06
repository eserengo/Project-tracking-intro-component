(function () {

  document.querySelector('body').insertAdjacentHTML('afterbegin', `<div id='root'></div>`);
  
  const Map = ({ props }) => {
    return props.map((item) => <li key={item}>{item}</li>)
  }

  const Header = () => {
    const data = ['Product', 'Features', 'Pricing', 'Login',];
    return (
      <header>
        <img className='logo left' src='./src/images/logo.svg' alt='logo' />
        <img className='openModal right selectable mobile' src='./src/images/icon-hamburger.svg' alt='hamburger icon' onClick={() => ReactDOM.render(<Modal />, document.getElementById('root'))} />
        <nav className='nav selectable right desktop'>
          <ul className='flex-row center uppercase'>
            <Map props={data} />
          </ul>
        </nav>
      </header>
    )
  }

  const CreateModal = () => {
    const data = ['Product', 'Features', 'Pricing', 'Login',];
    return (
      <div className='modal'>
        <img className='logo left mobile' src='./src/images/logo.svg' alt='logo' />
        <img className='closeModal right selectable mobile' src='./src/images/icon-close.svg' alt='close icon' onClick={() => ReactDOM.render(<App />, document.getElementById('root'))} />
        <nav className='modal-nav selectable mobile'>
          <ul className='flex-col center uppercase'>
            <Map props={data} />
          </ul>
        </nav>
      </div>
    )
  }

  const Main = () => (
    <main>
      <span className='pill uppercase'>New</span><span className='comment uppercase'>Monograph Dashboard</span>
      <h1 className='heading uppercase'>Powerful insights into your team</h1>
      <p className='para'>Project planning and time tracking for agile teams</p>
      <button className='button selectable uppercase'>Schedule a demo</button><span className='comment uppercase'>to see a live preview</span>
    </main>
  )

  const Footer = () => (
    <footer>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/eserengo/" target="_blank">Federico Borzani</a>.
    </footer>
  )

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(DisplayOnResize(), 500);
  });

  window.addEventListener('', DisplayOnResize);

  const DisplayOnResize = () => {
    if (window.matchMedia("(width<=375px)").matches) {
      // RULES
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.remove('hidden');
      })
    }
    if (window.matchMedia("(width>375px)").matches) {
      // RULES
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.remove('hidden');
      })
    }
  }

  const App = () => {
    React.useEffect(() => {
      DisplayOnResize()
    }, []);
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }

  const Modal = () => {
    React.useEffect(() => {
      DisplayOnResize()
    }, []);
    return (
      <>
        <CreateModal />
        <Main />
        <Footer />
      </>
    )
  }

  ReactDOM.render(<App />, document.getElementById('root'));
})();