import { promises as fs } from 'fs';

export default async function Data() {
    const file = await fs.readFile(process.cwd() + '/public/projects.json', 'utf8');
    const data = JSON.parse(file);
    return data;
}