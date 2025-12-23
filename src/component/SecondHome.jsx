
const SecondHome = () => {
  return (
 
    <section className="second-home container">
      {/* first */}
      <div className="card">
        <img src="/Image/shoes.jpeg" alt="Shoe" />
        <div className="text">
          <h1>Adidas Sport Shoes</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="price">
          <h2>$ 0.53</h2>
          <p>Only</p>
        </div>
        <div className="color">
          <h2>Color</h2>
          <span className="color-circle red"></span>
          <span className="color-circle blue"></span>
          <span className="color-circle green"></span>
        </div>
        <button className="btn">Add To Cart</button>
      </div>
    </section>

  );
};

export default SecondHome;
