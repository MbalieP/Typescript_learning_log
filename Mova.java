package za.co.wethinkcode.robots.acceptanceTests;

import com.fasterxml.jackson.databind.JsonNode;
import org.junit.jupiter.api.*;
import za.co.wethinkcode.robots.server.RobotWorldClient;
import za.co.wethinkcode.robots.server.RobotWorldJsonClient;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Story: Move Forward
 * As a player
 * I want to command my robot to move forward a specified number of steps
 * So that I can explore the world and not be a sitting duck in a battle.
 */
class MoveForwardTests {
    private final static int DEFAULT_PORT = 5000;
    private final static String DEFAULT_IP = "localhost";
    private final RobotWorldClient serverClient = new RobotWorldJsonClient();

    @BeforeEach
    void connectToServer() {
        serverClient.connect(DEFAULT_IP, DEFAULT_PORT);
    }

    @AfterEach
    void disconnectFromServer() {
        serverClient.disconnect();
    }

    @Test
    void moveForwardAtEdgeOfWorldShouldReturnNorthEdge() {
        // Given that I am connected to a running Robot Worlds server
        // And the world is of size 1x1 with no obstacles or pits
        // And a robot called "HAL" is already connected and launched
        assertTrue(serverClient.isConnected());

        String launchRequest = "{" +
                "\"robot\": \"HAL\"," +
                "\"command\": \"launch\"," +
                "\"arguments\": [\"shooter\",\"5\",\"5\"]" +
                "}";

        JsonNode launchResponse = serverClient.sendRequest(launchRequest);
        assertNotNull(launchResponse);
        assertEquals("OK", launchResponse.get("result").asText());

        // When I send a command for "HAL" to move forward by 5 steps
        String moveRequest = "{" +
                "\"robot\": \"HAL\"," +
                "\"command\": \"forward\"," +
                "\"arguments\": [\"5\"]" +
                "}";

        JsonNode moveResponse = serverClient.sendRequest(moveRequest);
        assertNotNull(moveResponse);

        // Then I should get an "OK" response with the message "At the NORTH edge"
        assertEquals("OK", moveResponse.get("result").asText());
        assertNotNull(moveResponse.get("data").get("message"));
        assertTrue(moveResponse.get("data").get("message").asText().contains("NORTH edge"));

        // And the position should remain at [0,0]
        assertNotNull(moveResponse.get("data").get("position"));
        assertEquals(0, moveResponse.get("data").get("position").get(0).asInt());
        assertEquals(0, moveResponse.get("data").get("position").get(1).asInt());
    }
}
