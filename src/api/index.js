import {
  randBoolean,
  randCatchPhrase,
  randParagraph,
  randPriority,
  randStatus,
  randVerb,
} from '@ngneat/falso';
import { createServer, Factory, Model, RestSerializer } from 'miragejs';
import { capitalize } from '../lib/capitalize';

const ApplicationSerializer = RestSerializer.extend({});

export function makeServer({ environment = 'development' }) {
  return createServer({
    environment,

    serializers: {
      application: ApplicationSerializer.extend({
        root: false,
        embed: true,
      }),
    },

    factories: {
      issue: Factory.extend({
        title: () =>
          capitalize(`${randVerb()} ${randCatchPhrase().toLowerCase()}`),
        content: () => randParagraph({ length: 4 }).join('\n\n'),
        priority: () => randPriority(),
        status: () => randStatus(),
        completed: () => randBoolean(),
      }),
    },

    models: {
      issue: Model,
    },

    routes() {
      this.timing = 50;
      this.namespace = 'api';

      this.get('issues');
      this.post('issues');
      this.get('issues/:id');
      this.patch('issues/:id');
      this.del('issues/:id');
    },

    seeds(server) {
      server.createList('issue', 10);
      console.log(server.db.dump());
    },
  });
}
