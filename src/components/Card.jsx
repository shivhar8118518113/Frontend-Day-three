// [NEW FILE] src/components/Card.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({ title, description, category }) {
  // [ADD NEW STATES]
  const [liked, setLiked] = useState(false);
  const [done, setDone] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [qty, setQty] = useState(1);

  // [ADD HANDLERS]
  const toggleLike = () => setLiked(prev => !prev);
  const toggleDone = () => setDone(prev => !prev);
  const toggleExpand = () => setExpanded(prev => !prev);
  const incQty = () => setQty(prev => prev + 1);
  const decQty = () => setQty(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="col-md-4 mb-3">
      {/* Conditional classes for done/liked */}
      <div
        className={`card h-100 shadow-sm ${done ? "border-success" : ""} ${
          liked ? "border-danger" : ""
        }`}
      >
        <div className="card-body">
          {/* Status badges */}
          {done && <span className="badge bg-success me-2">Completed</span>}
          {liked && <span className="badge bg-danger me-2">Liked</span>}

          <h5 className="card-title">{title}</h5>

          {/* Expand/Collapse description */}
          {expanded ? (
            <p className="card-text">{description}</p>
          ) : (
            <p className="card-text text-muted">
              Details hidden. Click “Expand”.
            </p>
          )}

          {/* Category badge */}
          <span className="badge bg-primary">{category}</span>

          {/* Action buttons */}
          <div className="mt-3 d-flex flex-wrap gap-2">
            {/* Like */}
            <button
              className={`btn btn-sm ${
                liked ? "btn-danger" : "btn-outline-danger"
              }`}
              onClick={toggleLike}
            >
              {liked ? "Unlike" : "Like"}
            </button>

            {/* Done */}
            <button
              className={`btn btn-sm ${
                done ? "btn-success" : "btn-outline-success"
              }`}
              onClick={toggleDone}
            >
              {done ? "Mark as Undone" : "Mark as Done"}
            </button>

            {/* Expand/Collapse */}
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={toggleExpand}
            >
              {expanded ? "Collapse" : "Expand"}
            </button>

            {/* Quantity */}
            <div className="btn-group btn-group-sm" role="group">
              <button
                className="btn btn-outline-secondary"
                onClick={decQty}
              >
                -
              </button>
              <button className="btn btn-light" disabled>
                {qty}
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={incQty}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
