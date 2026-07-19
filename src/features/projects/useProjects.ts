import { projectsData } from "./projectsData";

export function useProjects() {
    return {
        projects: projectsData
    };
}