const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  field1: {
    type: String,
    require: true,
  },
  field2: String,
  boolean_field: Boolean,
  created_at: { type: Date, default: Date.now },
});

const Project = mongoose.model('Project', ProjectSchema);

const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const adminBroOptions = new AdminBro({
  resources: [{
    resource: Project,
    options: {
      properties: {
        field2: { type: 'richtext' },
        created_at: {
          isVisible: { edit: false, list: true, show: true, filter: true },
        },
      },
    },
    rootPath: '/admin',
  }],
});

const router = AdminBroExpress.buildRouter(adminBroOptions);

const express = require('express');
const server = express();

server.use(adminBroOptions.options.rootPath, router);

const run = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: 'root',
    pass: 'root',
  });

  await server.listen(5500, () => console.log('Server is running on port 5500'));
};

run();
