import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.Desktop;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

public class TheSmithsApp {
    public static void main(String[] args) {
        // Create the main window
        JFrame frame = new JFrame("The Smiths");
        JButton button = new JButton("Abrir Discografia");

        // Configure the button to open the HTML page
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                openHTMLPage();
            }
        });

        // Configure the window
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 200);
        frame.add(button);
        frame.setLayout(new BorderLayout());
        frame.add(button, BorderLayout.CENTER);
        frame.setVisible(true);
    }

    // Method to open the HTML page
    private static void openHTMLPage() {
        String url = "file:///path/to/your/discografia.html";
        try {
            Desktop.getDesktop().browse(new URI(url));
        } catch (IOException | URISyntaxException e) {
            JOptionPane.showMessageDialog(null, "Error opening HTML page: " + e.getMessage());
        }
    }
}