<template>
  <div class="layout">
    <header class="header">
      <h1>
        <g-link to="/" class="logo">Darling Dinner's Ready</g-link>
      </h1>
      <nav class="nav">
        <!-- <g-link class="nav__link" to="/">Home</g-link> -->
        <!-- <g-link class="nav__link" to="/about">About</g-link> -->
      </nav>
    </header>

    <div class="bg"></div>

    <transition name="fade" appear>
      <main>
      <slot />
    </main>
    </transition>

    <div class="footer">
      <p>&copy; {{ new Date().getFullYear() }} Darling Dinner's Ready
        <br>
        <a href="email:rvniemela@hotmail.com">rvniemela@hotmail.com</a>
      </p>
    </div>
  </div>
</template>

<style>
h1 {
  margin: 2rem 0 1rem;
  line-height: 1;
}
.fade-enter-active {
  transition: all .7s ease-in-out;
}

.fade-enter {
  opacity: 0;
  transform: translateY(10px);
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  color: #333;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background: linear-gradient(#ffffff, #ffd3cb);
  z-index: -1;
}

a {
  color: #333;
  text-decoration: none;
}

.layout {
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  align-items: center;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 1;
}

.nav__link {
  margin-left: 20px;
}
.logo, h1, h2 {
  font-family: cursive;
  letter-spacing: 0px;
  transform: skew(-5deg);
  text-shadow: 0px 0px 5px #f74d4d80;
  display: block;
  color: #936464;
}
h2 {
  border-bottom: 1px solid #ca1d1d80;
  margin: 2rem 0 1rem;
  line-height: 1;
}
.logo {
  color: #333;
  padding: 5rem 0 1rem;
  text-decoration: none;
  letter-spacing: 0px;
  transform: skew(-5deg);
  text-shadow: 0px 0px 5px #f74d4d80;
  display: block;
}

.footer {
  margin-top: 5rem;
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-top: 1px solid #ddd;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
