;(function () {
    var navItems = document.querySelectorAll('#router-nav .nav-item')
    var view = document.getElementById('router-view')
    
    window.addEventListener('load', function () {
      view.innerHTML = navItems[0].dataset.id
      history.replaceState(navItems[0].dataset.id, null, navItems[0].dataset.id)
    })
  
    for (var navItem of navItems) {
      console.log(navItem)
      navItem.addEventListener('click', function () {
        history.pushState(this.dataset.id, null, this.dataset.id)
        view.innerHTML = this.dataset.id
        // ajax here
      })
    }
  
    window.addEventListener('popstate', function (e) {
      if (e.state) {view.innerHTML = e.state}
    })
  
  })()