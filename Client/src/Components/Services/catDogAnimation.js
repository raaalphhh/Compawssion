export function injectCatDogAnimation(targetElement) {
    // Create a wrapper container
    const wrapper = document.createElement('div');
    wrapper.classList.add('cat-dog-animation');
  
    // Inject the inner HTML
    wrapper.innerHTML = `
      <div class="left">
        <div class="cat">
          <div class="ears1"></div>
          <div class="head1">
            <div class="eyes1"></div>
            <div class="nose1"></div>
          </div>
          <div class="body1">
            <div class="left-paw1"></div>
            <div class="right-paw1"></div>
          </div>
          <div class="tail1"></div>
          <div class="PRlaptop">
            <div class="PRscreen"></div>
            <div class="PRkeyboard"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="dog">
          <div class="ears2"></div>
          <div class="head2">
            <div class="eyes2"></div>
            <div class="nose2"></div>
          </div>
          <div class="body2">
            <div class="left-paw2"></div>
            <div class="right-paw2"></div>
          </div>
          <div class="tail2"></div>
          <div class="ORlaptop">
            <div class="ORscreen"></div>
            <div class="ORkeyboard"></div>
          </div>
        </div>
      </div>
    `;
  
    // Append the wrapper to the specified element
    targetElement.appendChild(wrapper);
  
    // Inject the styles once
    if (!document.getElementById('cat-dog-animation-style')) {
      const style = document.createElement('style');
      style.id = 'cat-dog-animation-style';
      style.textContent = `
  
      :root {
        --peach: #FFCA95;
        --grape: #7C85AB;
        --darkpurple: #475881;
        --navy: #20314E;
        --pink: #FFA5C0;
        --cream: #FBF1D8;
        --orange: #FFA852;
        --darkorange: #F07E42;
      }
  
      .cat-dog-animation {
        position: relative;
        width: 100%;
        height: 300px;
        overflow: hidden;
        font-size: 0;
      }
  
      .left, .right {
        display: inline-block;
        height: 100%;
        width: 50%;
        position: relative;
      }
  
      .left { background: var(--peach); }
      .right { background: var(--navy); }
  
      .cat, .dog {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
  
      .cat {
        right: 0;
        margin-right: 50px;
      }
  
      .dog {
        left: 0;
        margin-left: 50px;
      }
  
      .ears1, .ears2,
      .head1, .head2,
      .eyes1, .eyes2,
      .nose1, .nose2,
      .body1, .body2,
      .left-paw1, .left-paw2,
      .right-paw1, .right-paw2,
      .tail1, .tail2,
      .PRlaptop, .PRscreen, .PRkeyboard,
      .ORlaptop, .ORscreen, .ORkeyboard {
        position: relative;
        box-sizing: border-box;
      }
  
      /* Add essential styles for just the visual display */
      .head1, .head2 {
        height: 74px;
        width: 140px;
        border-radius: 37px;
        background: var(--grape);
        box-shadow: -8px 0 0 var(--darkpurple);
        z-index: 2;
      }
  
      .head2 {
        background: var(--orange);
        box-shadow: 8px 0 0 var(--darkorange);
      }
  
      .eyes1, .eyes2 {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: black;
        position: absolute;
        top: 37px;
      }
  
      .eyes1 { left: 64px; }
      .eyes2 { left: 50px; }
  
      .eyes1::before, .eyes2::before {
        content: '';
        position: absolute;
        height: 12px;
        width: 12px;
        background: black;
        border-radius: 50%;
        left: 18px;
      }
  
      /* Add minimal body/paw visuals */
      .body1, .body2 {
        height: 100px;
        width: 200px;
        background: var(--grape);
        border-radius: 55px;
        margin-top: -10px;
      }
  
      .body2 {
        background: var(--orange);
      }
  
      .left-paw1, .right-paw1,
      .left-paw2, .right-paw2 {
        height: 25px;
        width: 37px;
        border-radius: 12px;
        background: var(--cream);
        position: absolute;
        top: 70px;
      }
  
      .left-paw1 { left: 95px; }
      .right-paw1 { left: 142px; top: 45px; }
  
      .left-paw2 { left: 15px; }
      .right-paw2 { left: 60px; top: 45px; }
  
      /* You can expand this with more animation/keyframes if needed */
  
      @keyframes catLeftType {
        2%  {transform: translateY(-8px)}
        6%  {transform: none}
        8%  {transform: translateY(-8px)}
        10% {transform: none}
      }
  
      @keyframes dogLeftType {
        50% {transform: none}
        52% {transform: translateY(-8px)}
        56% {transform: none}
      }
  
      /* Add other animations if needed */
      `;
      document.head.appendChild(style);
    }
  }
  