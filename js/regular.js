let rewardOpened = false;

    const rewardImage = document.getElementById("reward-image");
    const resultElement = document.getElementById("result");
    const button = document.getElementById("roll-button");

    rewardImage.addEventListener("click", spinReward);
    button.addEventListener("click", spinReward);

    function spinReward() {
      if (rewardOpened) return;

      rewardOpened = true;

      const randomNum = Math.floor(Math.random() * 6) + 1;

      if (randomNum === 1) {
        rewardImage.src = "../images/darkchocolate.jpg";
        resultElement.innerText = "🍫 Congratulations! You won Dark Chocolate!";
      }
      else if (randomNum === 2) {
        rewardImage.src = "../images/heatingpad.jpg";
        resultElement.innerText = "🔥 Congratulations! You won a Heating Pad!";
      }
      else if (randomNum === 3) {
        rewardImage.src = "../images/pads.jpg";
        resultElement.innerText = "🩸 Congratulations! You won Sanitary Pads!";
      }
      else if (randomNum === 4) {
        rewardImage.src = "../images/tampons.jpg";
        resultElement.innerText = "✨ Congratulations! You won Tampons!";
      }
      else if (randomNum === 5) {
        rewardImage.src = "../images/mensturalcup.jpg";
        resultElement.innerText = "🌸 Congratulations! You won a Menstrual Cup!";
      }
      else {
        rewardImage.src = "../images/coupon.png";
        resultElement.innerText = "💖 Congratulations! You won a Pink Discount Coupon!";
      }

      button.disabled = true;
      button.innerText = "Reward Claimed 🎉";
      rewardImage.style.cursor = "default";
    }
