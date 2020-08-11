exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("id");
      table.string("name");
    })
    .createTable("art", (table) => {
      table.increments("id");
      table.integer("user_id");
      table.foreign("user_id").references("id").inTable("user");

      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("ratings", (table) => {
      table.integer("art_id");
      table.foreign("art_id").references("id").inTable("art");
      table.integer("rating");
    });
};
exports.down = function (knex, Promise) {};
