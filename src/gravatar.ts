import crypto from 'crypto';

type IconType = 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash';

export const gravatarPath = (seed: string, iconType: IconType = 'retro') => {
	const normSeed = seed.trim().toLocaleLowerCase();
	const md5 = crypto.createHash('md5');
	const digest = md5.update(normSeed).digest('hex');

	return `https://www.gravatar.com/avatar/${digest}/?d=${iconType}`;
};
