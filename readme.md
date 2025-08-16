## Airline Booking System  

- Implemented dedicated models for **cities**, **airports**, **flights**, and **airplanes** with comprehensive data validation.  
- Architected a scalable **two-microservice backend architecture**, strategically separating transactional booking logic from static flight data management.  
- Designed and enforced robust **relational database schemas** with foreign key constraints to ensure data integrity across all services through proper associations and comprehensive data validation.  
- Executed optimized **join operations** between flights, airports, and planes to deliver efficient JSON responses.  
- Built high-performance **search APIs** featuring dynamic filtering, sorting capabilities, and real-time airplane lookup functionality based on departure and arrival airport codes.  
- Implemented **ACID-compliant database transactions** with rollback mechanisms to secure booking operations and eliminate race conditions.  
- Implemented automated **cron jobs** to delete bookings that remain unconfirmed after 30 minutes, maintaining database hygiene.  
- Implemented **idempotent APIs** to prevent duplicate booking submissions and ensure request reliability.  
- Established comprehensive **error handling** with appropriate HTTP status codes and adherence to industry best practices.  
