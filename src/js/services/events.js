import { baseUrl, resitoriesQuantity } from '../variables.js';

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${resitoriesQuantity}`
    )
    const events = await response.json()
    return events.filter(element => element.type === "CreatEvent"|| element.type === "PushEvent").slice(0, resitoriesQuantity)
}

export { getEvents }
