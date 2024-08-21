const valores = ['hola', 'chao', 'muñeco'] as const;
type TypeValores = typeof valores[number];

type HTTPVerbs = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'UPDATE';
type VerbsWithBody = Extract<HTTPVerbs, | 'POST' | 'PUT' | 'DELETE' | 'UPDATE'>;
type VerbsWithoutBody = Exclude<HTTPVerbs, VerbsWithBody>;

type PrepareHeaders = Partial<{
    'Content-Type': string
    'Authorization': string
    'Accept': string
}>

type TypeHeader = RequestInit['headers'] & PrepareHeaders;

type MethodCombination = 
    {method?: VerbsWithBody, body?: RequestInit['body']} |
    {method?: VerbsWithoutBody, body?: never};

type TypeRequestInit = RequestInit & MethodCombination & { headers?: TypeHeader};


type typeResponse = {
    id: number,
    status: number,
    statusText: string,
}

declare function fetchx(
    input: string | URL | globalThis.Request,
    init?: TypeRequestInit,
): Promise<Response>;


const BASE_URL = '';  
const fetchResponse = fetchx(BASE_URL, {
    method: 'POST',
    body: 'asdfasdf',
    headers: {
        'Content-Type': 'application/json',
        
    }
})
    .then(response => response.json() as Promise<typeResponse>);