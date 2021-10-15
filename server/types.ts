export type DatabaseModel = 'players' | 'questions' | 'answers';

export interface IPlayers {
	id: number;
	name: string;
	handle: string;
	is_playing: boolean | number;
}

export interface IQuestions {
	id: number;
	question: string;
	hint: string | null;
	last_asked: string | null;
}

export interface IAnswers {
	id: number;
	player_id: number;
	question_id: number;
	answer: string;
	votes: number;
	date_answered: string;
}

export type PickRename<T, K extends keyof T, R extends PropertyKey> = {
	[P in keyof T as P extends K ? R : P]: T[P];
};