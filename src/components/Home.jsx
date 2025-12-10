import React from "react";
import Card from "./Card";   // [NEW LINE] Card component import

function Home() {
  // [NEW BLOCK] Dummy data array
  const cardData = [
    { title: "Task Manager", description: "Manage your daily tasks easily.", category: "Productivity" },
    { title: "Study Notes", description: "Organize notes for exams.", category: "Education" },
    { title: "Shopping List", description: "Track groceries and essentials.", category: "Personal" },
    { title: "Workout Plan", description: "Stay fit with daily routines.", category: "Health" },
    { title: "Project Ideas", description: "Brainstorm and save ideas.", category: "Creativity" },
  ];

  return (
    <>   {/* ✅ Fragment wrapper added */}
      {/* --- पुराना Section --- */}
      <section className="py-5 bg-light d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-6 display-md-4 fw-bold text-primary">Welcome to My App</h1>
          <p className="lead mt-3 text-muted">
            This is a component.
          </p>
          <img
            src="https://via.placeholder.com/800x300"
            alt="Placeholder"
            className="img-fluid rounded shadow mt-4"
          />
        </div>
      </section>

      {/* --- नया Cards Section --- */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Reusable Cards</h2>
          <div className="row">
            {cardData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
