# Architecture

## Current shape

```text
Student PWA     Rider PWA     Admin PWA
       \\           |           /
        \\          |          /
         Spring Boot Modular Monolith
                    |
               PostgreSQL
                    |
            External Services
        Razorpay | WhatsApp Cloud API | Object Storage
```

The web applications are independently deployable Next.js applications. The backend is one Java/Spring Boot deployment organized into explicit feature packages. Its module boundaries are maintained in code and tests rather than by distributed deployment boundaries.

## Why a modular monolith

Turant is being built by one developer and begins with a tightly connected operational domain: orders, payments, refunds, riders, finance, and audit records. A modular monolith offers simple local development, coherent transactions, lower operational cost, and clear code ownership while preserving future extraction boundaries where evidence justifies it.

## PostgreSQL is the source of truth

PostgreSQL will hold transactional order, payment, refund, wallet, earning, settlement, and audit data. State transitions and monetary records must be durable, traceable, and protected by database constraints and transactions. External service callbacks are inputs to reconcile, not replacements for authoritative records.

Google Sheets, if used, is an operational mirror for reporting or manual workflows only. It must not be a system of record and cannot silently overwrite transactional history.

## Deliberate MVP exclusions

Kafka, Redis, Kubernetes, Elasticsearch, and microservices are intentionally excluded from the MVP. They add operational surface area before there is measured need. PostgreSQL transactions, application-level background work, and straightforward deployment are sufficient for the initial campus scope. These choices can be revisited with concrete scale, availability, or latency evidence.

## Multi-college design

The initial experience may target one college, but domain data and authorization will be scoped by college from the first domain-model phase. College configuration, delivery points, vendors, users, and operational access must not assume a globally single campus.

## Financial safety

Financial safety is a core architectural requirement. Payment, refund, wallet, rider earning, vendor settlement, and reconciliation records will be append-oriented and auditable. Administrative overrides require an actor, reason, timestamp, and audit trail. Historical financial and order records must not be silently rewritten.
