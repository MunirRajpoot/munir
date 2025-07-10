import connectToMongoDb from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request) {
    try {
        await connectToMongoDb();

        const { firstName, lastName, email, phone, category, message } = await request.json();

        const newContact = new Contact({
            firstName,
            lastName,
            email,
            phone,
            category,
            message,
        });

        await newContact.save();

        return new Response(
            JSON.stringify({ message: "Contact saved successfully" }),
            {
                status: 201,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error saving contact:", error);

        return new Response(
            JSON.stringify({ error: "Failed to save contact" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
