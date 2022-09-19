class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/'
	_apiKey = '0477c8b3b7324fc62cbbda1b0e27a681'
	_baseOffset = 210


	getResource = async (url) => {
		let res = await fetch(url);

		if(!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`)
		}

		return await res.json()
	}

	getAllCharacters = () => {
		return this.getResource(`${this._apiBase}characters?limit=9&offset=${this._baseOffset}&apikey=${this._apiKey}`)
	}

	getCharacter = async (id) => {
		return this.getResource(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`);
	}
		
}

export default MarvelService;




// import {useHttp} from '../hooks/http.hook'

// const useMarvelService = () => {
// 	const {loading, request, error, clearError} = useHttp();

// 	const _apiBase = 'https://gateway.marvel.com:443/v1/public/'
// 	const _apiKey = '0477c8b3b7324fc62cbbda1b0e27a681'
// 	const _baseOffset = 210;

// 	const getAllCharacters = async (offset = _baseOffset) => {
// 		const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&apikey=${_apiKey}`);
// 		return res.data.results.map(_transformCharacter)
// 	}

// 	const getCharacter = async (id) => {
// 		const res = await request(`${_apiBase}characters/${id}?apikey=${_apiKey}`);
// 		return _transformCharacter(res.data.results[0])
// 	}

// 	const getAllComics = async (offset = 0) => {
//         const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&apikey=${_apiKey}`);
//         return res.data.results.map(_transformComics);
//     }

//     const getComics = async (id) => {
//         const res = await request(`${_apiBase}comics/${id}?apikey=${_apiKey}`);
//         return _transformComics(res.data.results[0]);
//     }

// 	const _transformComics = (comics) => {
//         return {
//             id: comics.id,
//             title: comics.title,
//             description: comics.description || 'There is no description',
//             pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
//             thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
//             language: comics.textObjects.language || 'en-us',
//             price: comics.prices.price ? `${comics.prices.price}$` : 'not available'
//         }
//     }

// 	const _transformCharacter = (data) => {
// 		return {
// 			id: data.id,
// 			name: data.name,
// 			description: data.description,
// 			thumbnail: data.thumbnail.path + '.' + data.thumbnail.extension,
// 			homepage: data.urls[0].url,
// 			wiki: data.urls[1].url,
// 			comics: data.comics.items
// 		}
// 	}

// 	return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComics}
// }

// export default useMarvelService;