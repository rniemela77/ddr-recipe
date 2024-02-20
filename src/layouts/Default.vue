<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="logo">Darling Dinner's Ready</g-link>
      </strong>
      <nav class="nav">
        <!-- <g-link class="nav__link" to="/">Home</g-link> -->
        <!-- <g-link class="nav__link" to="/about">About</g-link> -->
      </nav>
    </header>
    <div class="bg"></div>
    <slot/>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  color: #333;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
.logo {
  font-size: 1.5rem;
  color: #333;
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  font-family: cursive;
  letter-spacing: 0px;
  transform: skew(-5deg);
  display: block;
}
</style>
