import { ScoreCard } from '.';

/**
 * Firebase does not use "lists", but actually a json "object" with ids
 */

/**
 * Generic ids referenced
 */
interface IdListObject {
  [id: string]: string;
}

/**
 * Ids with a specific object below
 */
interface ScoreCardListObject {
  [name: string]: ScoreCard;
}

export { IdListObject, ScoreCardListObject };
