export const api_base_url = import.meta.url || 'https://localhost:3001';

export const post = async<T>(base_url: string, endpoint: string, body: any): Promise<T> => {
    try {
        const response = await fetch(`${base_url}${endpoint}`, {
            method: 'POST',
            body: body
        })

        if (!response.ok) {
            throw ('Ошибка отправки данных!');
        }
        const data = await response.json();
        return data;

    }
    catch (e: any) {
        alert(e);
    }

}

export const get = async (base_url: string, endpoint: string): Promise<any> => {
    try {
        const response = await fetch(`${base_url}${endpoint}`);

        if (!response.ok) {
            throw('Ошибка получения данных!')
        }
        const data = await response.json();
        return data;
    }
    catch (e: any) {
        alert(e)
    }

}


