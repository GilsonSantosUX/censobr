// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

const Status = {
    async status(statusCode){
        switch(statusCode){
            case 200:
                return `Estas requisição foi bem sucedida. #${statusCode}`;
            case 201:
                return `A requisição foi bem sucedida e um novo recurso foi criado como resultado. #${statusCode}`;
            case 202:
                return `A requisição foi recebida mas nenhuma ação foi tomada sobre ela. #${statusCode}`;
            case 203:
                return `Houve alguma inesperado nos dados da requisição tente refazer. #${statusCode}`;
            case 204:
                return `Não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis. #${statusCode}`;
            case 400:
                return `Servidor não entendeu a requisição pois está com uma sintaxe inválida. #${statusCode}`;
            case 401:
                return `O cliente deve se autenticar para obter a resposta solicitada. #${statusCode}`;
            case 403:
                return `O cliente não tem direitos de acesso ao conteúdo portanto o servidor está rejeitando dar a resposta. ${statusCode}`;
            case 404:
                return `O servidor não pode encontrar o recurso solicitado. #${statusCode}`;
            case 500:
                return `O servidor encontrou uma situação com a qual não sabe lidar. #${statusCode}`;
            case 501:
                return `O método da requisição não é suportado pelo servidor e não pode ser manipulado. #${statusCode}`;
            break;
            case 503:
                return `O servidor não está pronto para manipular a requisição. #${statusCode}`;
            default:
                return `Erro ainda não tratado entrar informa um administrador. #${statusCode}!`;

        }
    }
}

module.exports = Status;