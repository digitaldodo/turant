# Architecture Decision Records

## ADR-001: Use a modular monolith

**Status:** Accepted

Turant will begin as a Spring Boot modular monolith organized by feature. A single deployable supports transactional consistency across its initially coupled domain while remaining simple for a single developer to build and operate. Microservices are deferred until a specific, measured need warrants them.

## ADR-002: PostgreSQL is the transactional source of truth

**Status:** Accepted

PostgreSQL will be authoritative for operational and financial records. Database transactions, constraints, migrations, and durable audit data are required foundations for payment- and order-related work. Google Sheets may become an operational mirror, never an authoritative write path.

## ADR-003: Exclude Kafka, Redis, Kubernetes, and Elasticsearch from MVP

**Status:** Accepted

These systems are not needed for the initial campus scope and introduce material operational complexity. The team will prefer application-level solutions and PostgreSQL until scale or reliability evidence changes this decision.

## ADR-004: Design for multiple colleges from the beginning

**Status:** Accepted

Although the first rollout is focused around one college, future data models and authorization must support college scoping. This is a low-cost early boundary that prevents a costly single-campus redesign.

## ADR-005: Financial history is append-oriented and auditable

**Status:** Accepted

Financial and order history must not be silently rewritten. Future adjustments, refunds, reconciliations, and administrative overrides will record provenance, actor, timestamp, and reason. This is a core constraint, not a reporting feature.
