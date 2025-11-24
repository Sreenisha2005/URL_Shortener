# Step 1: Build the application
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

# Copy pom.xml and download dependencies (cache optimization)
COPY pom.xml .
RUN mvn -q dependency:go-offline

# Copy the entire project and build it
COPY . .
RUN mvn -q clean package -DskipTests

# Step 2: Run the application
FROM eclipse-temurin:21-jre

WORKDIR /app

# Copy the built jar file from the first stage
COPY --from=build /app/target/*.jar app.jar

# Expose your Spring Boot port
EXPOSE 8081

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
