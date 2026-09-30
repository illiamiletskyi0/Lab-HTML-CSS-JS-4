/* FlowTask — landing page behaviour */

document.addEventListener('DOMContentLoaded', function () {

  /* Header navigation now uses real anchors (#features, #pricing, …),
     so no click-only handler is needed here. */

  /* Sign-up flow */

  function startSignup() {
    var trial = document.getElementById('trial');
    if (trial) {
      trial.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'index.html#trial';
    }
  }

  var headerCta = document.getElementById('header-cta');
  if (headerCta) {
    headerCta.addEventListener('click', startSignup);
  }

  var heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', startSignup);
  }

  /* Trial form */

  var trialSubmit = document.getElementById('trial-submit');
  if (trialSubmit) {
    var form = document.getElementById('trial-form');
    var email = form.querySelector('input[name="email"]');
    var error = document.getElementById('trial-error');

    function showError() {
      error.hidden = false;
      email.setAttribute('aria-invalid', 'true');
      email.style.boxShadow = '0 0 0 2px #fca5a5';
      email.focus();
    }

    function clearError() {
      error.hidden = true;
      email.removeAttribute('aria-invalid');
      email.style.boxShadow = '';
    }

    trialSubmit.addEventListener('click', function () {
      if (!email.value) {
        showError();
        return;
      }

      clearError();
      form.innerHTML = '<p>Thanks — check your inbox, the workspace is being created.</p>';
    });

    email.addEventListener('input', function () {
      if (email.value) {
        clearError();
      }
    });
  }

  /* FAQ accordion */

  document.querySelectorAll('.faq__q').forEach(function (question) {
    question.addEventListener('click', function () {
      var isOpen = question.parentElement.classList.toggle('is-open');
      question.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  /* Seasonal promo bar */

  window.addEventListener('load', function () {
    setTimeout(function () {
      var promo = document.createElement('aside');
      promo.className = 'promo';
      promo.setAttribute('aria-labelledby', 'promo-title');
      promo.innerHTML = '<h2 class="promo__title" id="promo-title">Autumn offer</h2>'
        + '<p class="promo__text">3 months of Pro for the price of one. '
        + '<a href="#pricing">See plans</a></p>';
      document.body.insertBefore(promo, document.body.firstChild);
    }, 800);
  });

});
