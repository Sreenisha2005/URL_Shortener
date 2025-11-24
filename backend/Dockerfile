# Step 1: Build the application
FROM maven:3.9.4-amazoncorretto-17 AS build

WORKDIR /app

# Copy pom.xml and download dependencies first (cache layer)
COPY pom.xml .
RUN mvn -q dependency:resolve

# Copy the entire project and build it
COPY . .
RUN mvn -q clean package -DskipTests

# Step 2: Run the application
FROM amazoncorretto:17

WORKDIR /app

# Copy the built jar file from the first stage
COPY --from=build /app/target/*.jar app.jar

# Application runs here
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
