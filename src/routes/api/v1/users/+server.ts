import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
	const users = await prisma.user.findMany();

	return new Response(JSON.stringify(users), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export async function POST(event: { request: { json: () => any } }) {
	const body = await event.request.json();
	console.log("BODY",body);

	const createdUser = await prisma.user.create({
		data: {
			...body
		}
	});
	// console.log(createdUser);
	
	return new Response(JSON.stringify(createdUser), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
export async function PUT(event: { request: { json: () => any } }) {
	const body = await event.request.json();
	const updatedUser = await prisma.user.update({
		where: {
			id: body.id
		},
		data: body
	});
	return new Response(JSON.stringify(updatedUser), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
export async function DELETE(event: { request: { json: () => any } }) {
	const body = await event.request.json();
	const deletedUser = await prisma.user.delete({
		where: {
			id: body.id
		}
	});
	return new Response(JSON.stringify(deletedUser), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});
}


