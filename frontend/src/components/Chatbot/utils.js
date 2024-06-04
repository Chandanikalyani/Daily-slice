export const analyze = (text) => {
  if (text.toLowerCase().includes("mobile")) {
    return "The mobile number is 0769384186.";
  } else if (text.toLowerCase().includes("email")) {
    return "The email address is hotpizza@gmail.com.";
  } else if (text.toLowerCase().includes("address")) {
    return "The  address is No.446/1,Waiwatta,Naiwala Roundabout, Veyangoda.";
  } else if (text.toLowerCase().includes("started date")) {
    return "5 september 2020";
  } else if (text.toLowerCase().includes("open doors at")) {
    return "Every day Any Time,You Can Make Reservation";
  } else if (text.toLowerCase().includes("places")) {
    return "You Can Get Places Information From Reserve a Table Session";
  
  } else if (text.toLowerCase().includes("thanks") ||text.toLowerCase().includes("thank you")||text.toLowerCase().includes("thank")) {
    return "you are welcome,thanks for visiting us!";
  }
    // pizza types
    else if (text.toLowerCase().includes("neapolitan pizza")) {
      return " Originating from Naples, this pizza has a thin, soft crust with a raised edge. It is typically topped with tomatoes, mozzarella cheese, fresh basil, and extra-virgin olive oil.Healthness:";
    }
    else if (text.toLowerCase().includes("margherita pizza")) {
      return "A type of Neapolitan pizza, the Margherita is topped with tomatoes, mozzarella cheese, fresh basil, and olive oil. It is said to have been created to honor Queen Margherita of Savoy.";
    }
    else if (text.toLowerCase().includes("marinara pizza")) {
      return "Another classic Neapolitan pizza, the Marinara is topped with tomatoes, garlic, oregano, and extra-virgin olive oil. It does not include cheese";
    }
    else if (text.toLowerCase().includes("pizza bianca")) {
      return " This pizza is made with a base of olive oil, salt, and sometimes garlic, but without tomato sauce. It can be topped with a variety of ingredients, such as cheese, vegetables, or meat.";
    }
    else if (text.toLowerCase().includes("pizza siciliana")) {
      return " Hailing from Sicily, this pizza is known for its thick crust and is often topped with tomatoes, onions, anchovies, and cheese.";
    }
    else if (text.toLowerCase().includes("pizza capricciosa")) {
      return " A traditional Italian pizza topped with tomato sauce, mozzarella cheese, mushrooms, artichokes, ham, and olives";
    }
    else if (text.toLowerCase().includes("pizza quattro stagioni")) {
      return " This pizza is divided into four sections, each representing a different season. The sections are typically topped with ingredients like tomatoes, mozzarella, mushrooms, ham, artichokes, and olives.";
    }
    else if (text.toLowerCase().includes("pizza romana")) {
      return " Originating from Rome, this pizza has a thin crust that is crispy on the edges and softer towards the center. It is often topped with tomatoes, mozzarella, anchovies, and oregano.";
    }
    // pizza types

    // Pasta types
    else if (text.toLowerCase().includes("spaghetti")) {
      return "Long, thin, and cylindrical. It's a versatile pasta often used with a variety of sauces, from simple marinara to complex seafood dishes.";
    }
    else if (text.toLowerCase().includes("fettuccine")) {
      return "Long, flat, and thick ribbons of pasta. It's traditionally served with rich, creamy sauces like Alfredo.";
    }
    else if (text.toLowerCase().includes("penne")) {
      return "Short, cylindrical pasta with diagonal cuts at each end. The name means \"quills\" or \"pens,\" and it pairs well with chunky sauces because the hollow shape holds the sauce well.";
    }
    else if (text.toLowerCase().includes("rigatoni")) {
      return "Large, ridged tubes. The ridges and the hollow center are perfect for holding onto hearty sauces and ingredients like sausage or vegetables.";
    }
    else if (text.toLowerCase().includes("linguine")) {
      return "Similar to spaghetti but flatter and slightly wider. It's often used with seafood-based sauces like clam sauce or light olive oil and herb dressings";
    }
    else if (text.toLowerCase().includes("macaroni")) {
      return "Short, curved tubes. It's commonly used in baked dishes like macaroni and cheese or pasta salads.";
    }
    else if (text.toLowerCase().includes("fusilli")) {
      return "Spiral-shaped pasta. The spirals are great for trapping thicker sauces and are often used in pasta salads and casseroles";
    }
    else if (text.toLowerCase().includes("farfalline")) {
      return "Bow-tie or butterfly-shaped pasta. It's visually appealing and works well with light sauces, in pasta salads, and with vegetables";
    }
    else if (text.toLowerCase().includes("lasagna")) {
      return "Wide, flat sheets of pasta used in layered dishes. It's perfect for baked lasagna, where layers of pasta alternate with meat, cheese, and sauce";
    }
    else if (text.toLowerCase().includes("ravioli")) {
      return "Stuffed pasta pillows. They can be filled with cheese, meat, or vegetables and are usually served with a simple sauce or in a broth";
    }
    // Pasta types

   

    // drinks type
    else if (text.toLowerCase().includes("beer")) {
      return "A cold beer, whether lager or ale, is a popular choice to accompany pizza in Italy.";
    }
    else if (text.toLowerCase().includes("wine")) {
      return " Italians often pair their pizza with a glass of wine, such as Chianti or Barbera.";
    }
    else if (text.toLowerCase().includes("soft drinks")) {
      return "Popular choices include Coca-Cola, Fanta, and other sodas.";
    }
    else if (text.toLowerCase().includes("mineral water")) {
      return "Many Italians prefer to enjoy their pizza with a refreshing glass of mineral water.";
    }
    
    // drinks type

    //packages
    
    else if (text.toLowerCase().includes("family meal deal")) {
      return " Includes two large pizzas, garlic bread, and a 2-liter soda.";
    }
    else if (text.toLowerCase().includes("date night special")) {
      return " A medium pizza, salad, and a dessert to share.";
    }
    else if (text.toLowerCase().includes("party pack")) {
      return " Three large pizzas, chicken wings, and a 2-liter soda.";
    }
    else if (text.toLowerCase().includes(" build your own pizza package")) {
      return " Choose your size, crust, and toppings for a discounted price.";
    }
    else if (text.toLowerCase().includes("lunch combo")) {
      return "A personal pizza, side salad, and a drink.";
    }
    else if (text.toLowerCase().includes("pizza and pasta combo")) {
      return "A medium pizza and a choice of pasta dish.";
    }
    else if (text.toLowerCase().includes("vegetarian feast")) {
      return " A large vegetarian pizza, garlic knots, and a salad.";
    } else if (text.toLowerCase().includes("game day bundle")) {
      return "Four medium pizzas, garlic breadsticks, and a 2-liter soda.";
    } else if (text.toLowerCase().includes(" pizza sampler")) {
      return "Two small pizzas with different toppings, perfect for trying new flavors.";
    } else if (text.toLowerCase().includes("student special")) {
      return "A personal pizza, breadsticks, and a drink at a discounted price.";
    
    //packages


  
  }else if (text.toLowerCase().includes("menu")) {
    return {
      message: "Here are the job categories:",
      options: [
        'Pizza','Pasta',"Drinks"
      ],
    };
    //list
  }else if (text.toLowerCase().includes("about us")) {
    return {
      message: "what you want ?",
      options: [
        "Email",
        "Address",
        "Mobile",
        'Started Date',
        "Open Doors At"
      ],
    };
  } else if (text.toLowerCase().includes("pasta")) {
    return {
      message: "Here some pasta we have ,",
      options: [
        'Spaghetti','Fettuccine','Penne','Rigatoni','Linguine','Macaroni','Fusilli','Farfalline','Lasagna','Ravioli'
      ],
    };
  }else if (text.toLowerCase().includes("drinks")) {
    return {
      message: "Here some drinks we have ,",
      options: [
        'Beer','Wine','Soft Drinks','Mineral Water'
      ],
    };
  } else if (text.toLowerCase().includes("pizza")) {
    return {
      message: "Here some Pizza we have ,",
      options: [
        'Neapolitan Pizza','Margherita Pizza','Marinara Pizza','Pizza Bianca','Pizza Siciliana','Pizza Capricciosa','Pizza Quattro Stagioni','Pizza Romana',
      ],
    };

  }else if (text.toLowerCase().includes("packages")) {
      return {
        message: "We have ,",
        options: [
          'Family Meal Deal','Date Night Special','Party Pack',' Build Your Own Pizza Package','Lunch Combo','Pizza and Pasta Combo','Vegetarian Feast','Game Day Bundle',' Pizza Sampler','Student Special'
        ],
      };
  }else if (
    text.toLowerCase().includes("hi") ||
    text.toLowerCase().includes("hello")
  ) {
    return "Hello!";
  } else if (
    text.toLowerCase().includes("how are you") ||
    text.toLowerCase().includes("how about you")
  ) {
    return "I'm doing well, thank you! How about you?";
  } else if (
    text.toLowerCase().includes("fine") ||
    text.toLowerCase().includes("well") ||
    text.toLowerCase().includes("good")
  ) {
    return "Glad to hear that! ";
  } else if (text.toLowerCase().includes("apply")) {
    return "To apply for a job, simply navigate to the job post you're interested in and click on the title to view more details. Once you're on the job details page, you'll find the \"Apply\" button conveniently located at the  right .";
  }else if (
    text.toLowerCase().includes("how are you") ||
    text.toLowerCase().includes("who") ||
    text.toLowerCase().includes("name") ||
    text.toLowerCase().includes("what is your name")
  ) {
    return "i'm chat bot in QuickJobs!";
  } else if (
    text.toLowerCase().includes("when you born") ||
    text.toLowerCase().includes("birthday") ||
    text.toLowerCase().includes("birth") ||
    text.toLowerCase().includes("what is your name") ||
    text.toLowerCase().includes("dob")
  ) {
    return "As an AI, I don't have a birthday, but I'm here to help you anytime!";
  } else if (
    text.toLowerCase().includes("country") ||
    text.toLowerCase().includes("from") ||
    text.toLowerCase().includes("live")
  ) {
    return "My country is Sri Lanka";
  } else if (
    text.toLowerCase().includes("jobs") ||
    text.toLowerCase().includes("how many jobs") ||
    text.toLowerCase().includes("job count")
  ) {
    return "QuickJobs have more than 1000+";
  } else if (text.toLowerCase().includes("about us")) {
    return "Welcome to QuickJobs, your one-stop solution for all your job search and hiring needs. Our simple and intuitive web app connects job seekers with their dream jobs and enables companies to post job openings effortlessly. Whether you’re a professional looking to advance your career or an employer seeking the perfect candidate, we are here to help you every step of the way. Explore opportunities, post vacancies, and take the next step towards a successful future with QuickJobs.";
  } else if (text.toLowerCase().includes(" tips") || text.toLowerCase().includes(" interview")) {
    return {
      message: "Of course! Here are some general interview tips:",
      options: [
        "Research the company and role.",
        "Practice common interview questions.",
        "Dress appropriately.",
        "Be punctual.",
        "Follow up with a thank-you note.",
      ],
    };
  }

  return "I didn't get your question";
};
