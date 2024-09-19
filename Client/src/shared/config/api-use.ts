import { getEnvVariable } from "../lib/functions";

export const apiUse = getEnvVariable<boolean>("VITE_API_USE", {
	required: true,
	errorMessage: "API USE is missing. Please check your environment configuration."
});
