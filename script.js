document.addEventListener('DOMContentLoaded', () => {
  const logoContainer = document.getElementById('logoContainer');

  logoContainer.addEventListener('click', () => {
    // Remove the animation temporarily
    logoContainer.style.animation = 'none';
    // Force reflow to allow the removal to take effect
    void logoContainer.offsetWidth;
    // Re-apply the continuous floating animation
    logoContainer.style.animation = 'float 2s infinite ease-in-out';
  });
});
