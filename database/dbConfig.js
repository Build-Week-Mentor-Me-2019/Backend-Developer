const knex = require("knex");
const configOptions = require("../knexfile").development;
const db = knex(configOptions);

module.exports = {
  findQuestions,
  findAnswers,
  findAnswerById,
  findQuestionsById,
  findAnswersOnQuestions,
  findId,
  login,
  update,
  removeEnt,
  matchEnt,
  matchOwn,
  removeOwn,
  removeQuestion,
  updateQuestion,
  addQuestion,
  addAnswer,
  updateAnswer,
  deleteAnswer,
  findUsers,
  findUserById,
  addUser,
  updateUser,
  deleteUser,
};

function findQuestions() {
  return db("questions");
}

function findAnswers() {
  return db("answers");
}

function findAnswerById(id) {
  return db("answers")
    .where({ id })
    .first();
}

function matchEnt(str) {
  return db("users").where({ username: str });
}

function matchOwn(str) {
  return db("business_owners").where({ username: str });
}

function findId(str) {
  return db("users")
    .where({ username: str.toString() })
    .select("users.id")
    .first();
}

function findTasks(id) {
  return db("tasks")
    .join("questions", "tasks.question_id", "=", "questions.id")
    .where({ question_id: id })
    .select(
      "tasks.id",
      "tasks.description",
      "tasks.notes",
      "tasks.completed",
      "questions.name as question_name",
      "questions.description as question_description"
    )
    .then(tasks => {
      return tasks.map(task => {
        return { ...task, completed: Boolean(task.completed) };
      });
    });
}

function findAnswersOnQuestions(questionID) {
  console.log(questionID);
  return db("answers").where({ question_id: questionID });
}

function findQuestionsById(questionID) {
  console.log(questionID);
  return db("questions").where({ id: questionID });
}

function registerEntrepreneur(resource) {
  return db("entrepreneurs").insert(resource);
}

function registerOwner(resource) {
  return db("business_owners").insert(resource);
}

function login(resource) {
  return db("users")
    .insert(resource)
    .then(ids => ({ id: ids[0] }));
}

function update(id, resource) {
  return db("users")
    .where("id", Number(id))
    .update(resource);
}
function removeEnt(id) {
  return db("entrepreneurs")
    .where({ username: String(str) })
    .del();
}

function removeOwn(str) {
  return db("business_owners")
    .where({ username: str })
    .del();
}

function removeQuestion(id) {
  return db("questions")
    .where("id", Number(id))
    .del();
}

function updateQuestion(id, question) {
  return db("questions")
    .where("id", Number(id))
    .update(question);
}

function addQuestion(question) {
  return db("questions").insert(question)
}

function addAnswer(answer) {
  return db("answers").insert(answer)
}

function updateAnswer(id, answer) {
  return db("answers")
  .where({ id })
  .update(answer)
}

function deleteAnswer(id) {
  return db("answers")
  .where({ id })
  .del();
}

function findUsers() {
  return db("users")
}

function findUserById(id) {
  return db("users")
  .where({ id });
}

function addUser(resource) {
  return db("users").insert(resource);
}

function updateUser(id, resource) {
  return db("users")
  .where({ id })
  .update(resource);
}

function deleteUser(id) {
  return db("users")
  .where({ id })
  .del()
}
