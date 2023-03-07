import { SlashCommandBuilder } from "discord.js";
import { Command } from "../Command";

export const Hello: Command = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Introduce yourself to the community")
        .addStringOption(option =>
            option.setName("experience")
                .setDescription("Your current professional experience level?")
                .setRequired(false)
                .addChoices(
                    { name: "Student", value: "student" },
                    { name: "Junior", value: "junior" },
                    { name: "Medior", value: "medior" },
                    { name: "Senior", value: "senior" }
                )
        ),
    execute: async (interaction) => {
        const experience = interaction.options.get("experience");

        const content = `Your experience is: ${experience?.value ?? "Unknown"}`;

        await interaction.reply({
            ephemeral: true,
            content
        });
    }
};