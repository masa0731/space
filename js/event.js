window.addEventListener('keyup', function (event) {
  switch (event.keyCode) {
    case 49: // 1
    $(".card_active").removeClass("card_active");
    $(".sun").addClass("card_active");
      break;
    case 50: // 2
    $(".card_active").removeClass("card_active");
    $(".marcury").addClass("card_active");
      break;
    case 51: // 3
    $(".card_active").removeClass("card_active");
    $(".venus").addClass("card_active");
      break;
    case 52: // 4
    $(".card_active").removeClass("card_active");
    $(".earth").addClass("card_active");
      break;
    case 53: // 5
    $(".card_active").removeClass("card_active");
    $(".moon").addClass("card_active");
      break;
    case 54: // 6
    $(".card_active").removeClass("card_active");
    $(".mars").addClass("card_active");
      break;
    case 55: // 7
    $(".card_active").removeClass("card_active");
    $(".jupiter").addClass("card_active");
      break;
    case 56: // 8
    $(".card_active").removeClass("card_active");
    $(".suturn").addClass("card_active");
      break;
    case 57: // 9
    $(".card_active").removeClass("card_active");
    $(".uranus").addClass("card_active");
      break;
    case 48: // 0
    $(".card_active").removeClass("card_active");
    $(".neptune").addClass("card_active");
      break;
    case 189: // 11
    $(".card_active").removeClass("card_active");
    $(".pluto").addClass("card_active");
      break;
      case 187: // 12
    $(".card_active").removeClass("card_active");
      break;
    default:
  }
});