import { promises as fs } from 'fs';

export default async function Data() {
    const file = await fs.readFile(process.cwd() + '/app/projects.json', 'utf8');
    const data = JSON.parse(file);
    console.log('data in action: ', data);
    return data;
}