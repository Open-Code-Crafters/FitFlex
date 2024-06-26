// this component is temperary and will be replaced with the actual workout and exercise components




const Plans = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "Rs 9.99",
      features: ["Access to basic workouts", "Limited support"],
    },
    {
      id: 2,
      name: "Premium Plan",
      price: "Rs 19.99",
      features: ["Access to premium workouts", "24/7 support"],
    },
    {
      id: 3,
      name: "Pro Plan",
      price: "Rs 29.99",
      features: ["Access to all workouts", "Personal trainer support"],
    },
  ];

  return (
    <div>
      <h1>Choose Your Fitness Plan</h1>
      <div className="plans-container">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-card">
            <h2>{plan.name}</h2>
            <h3>{plan.price}</h3>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button>Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
