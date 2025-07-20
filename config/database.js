module.exports = ({ env }) => {
  // Configuration pour PostgreSQL (production et développement)
  return {
    connection: {
      client: "postgres",
      connection: {
        // Priorité à DATABASE_URL (fournie par Render, Railway, etc.)
        connectionString: env("DATABASE_URL"),

        // Configuration alternative (si pas de DATABASE_URL)
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),

        // Configuration SSL (importante pour les services cloud)
        ssl:
          env("NODE_ENV") === "production"
            ? {
                rejectUnauthorized: env.bool(
                  "DATABASE_SSL_REJECT_UNAUTHORIZED",
                  false
                ),
              }
            : false,

        schema: env("DATABASE_SCHEMA", "public"),
      },

      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
        acquireTimeoutMillis: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
        createTimeoutMillis: 30000,
        destroyTimeoutMillis: 5000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 100,
      },
    },
  };
};
