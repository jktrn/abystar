import { Wrapper } from 'enkanetwork.js'

// i.e fetch('/api/enka/id/000000000')
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id

    const { genshin } = new Wrapper({
        language: 'en',
        cache: true,
    })

    const playerResponse = await genshin.getPlayer(id)

    return new Response(JSON.stringify(playerResponse), {
        headers: { 'content-type': 'application/json' },
    })
}
