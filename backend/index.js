require("dotenv").config();
const express = require("express");
const Application = require("./models/application");

const app = express();

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  next(error);
};

app.use(express.static("dist"));
app.use(express.json());

app.get("/api/applications", (request, response) => {
  Application.find({})
    .then((applications) => response.json(applications))
    .catch((error) => next(error));
});

app.get("/api/applications/:id", (request, response) => {
  Application.findById(request.params.id)
    .then((application) => response.json(application))
    .catch((error) => next(error));
});

app.post("/api/applications", (request, response) => {
  const body = request.body;

  const application = new Application({
    position: body.position,
    company: body.company,
    url: body.url,
    applicationDate: body.applicationDate,
    applicationStatus: body.applicationStatus,
    notes: body.notes,
    source: body.source,
  });

  application
    .save()
    .then((savedApplication) => response.json(savedApplication))
    .catch((error) => next(error));
});

app.put("/api/applications/:id", (request, response) => {
  const { applicationStatus } = request.body;

  Application.findById(request.params.id)
    .then((application) => {
      if (!application) {
        return response.status(404).end();
      }

      application.applicationStatus = applicationStatus;

      return application.save().then((updatedApplication) => {
        response.json(updatedApplication);
      });
    })
    .catch((error) => next(error));
});

app.delete("/api/applications/:id", (request, response) => {
  Application.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
