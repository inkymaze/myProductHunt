{
  currentUser: {
    id: 1,
    username: "julia"
  },
  products: {
    byId{  
      1: {
        id: 1,
        name: "Growth Hacker"
        desc: "An app to gain traction"
        image_url: "www.growthhacker.com/logo"
        product_url: "www.growthhacker.com"
      }
      2: {
        id: 2,
        name: "AI Bot"
        desc: "does everything for you"
        image_url: "www.aibot.com/logo"
        product_url: "www.aibot.com"
      }
    }
    allIds: [1, 2]
  }
  userProfile: {
    username: "john",
    fullname: "John Smith"
    image_url: "",
  }
  comments: {
    1: {
      user_id: 1,
      product_id: 1,
      text: "Must have app!"    
    }
  }
}
