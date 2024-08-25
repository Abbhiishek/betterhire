import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get('searchQuery');
    const id = searchParams.get('id');

    try {
        if (id) {
            const job = await prisma.job.findUnique({
                where: { id },
                include: {
                    company: true,
                    hiringManager: true,
                },
            });
            return NextResponse.json(job);
        } else {
            const jobs = await prisma.job.findMany({
                where: {
                    title: {
                        contains: searchQuery || '',
                        mode: 'insensitive',
                    },
                },
                include: {
                    company: true,
                    hiringManager: true,
                },
            });
            return NextResponse.json(jobs);
        }
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const newJob = await prisma.job.create({
            data: {
                ...body,
                company: { connect: { id: body.companyId } },
                hiringManager: { connect: { id: body.hiringManagerId } },
            },
            include: {
                company: true,
                hiringManager: true,
            },
        });
        return NextResponse.json(newJob, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id') || undefined;
        if (!id) {
            return NextResponse.json({ error: 'Job ID is required' }, { status: 400 });
        }
        const body = await request.json();
        const updatedJob = await prisma.job.update({
            where: { id },
            data: {
                ...body,
                company: body.companyId ? { connect: { id: body.companyId } } : undefined,
                hiringManager: body.hiringManagerId ? { connect: { id: body.hiringManagerId } } : undefined,
            },
            include: {
                company: true,
                hiringManager: true,
            },
        });
        return NextResponse.json(updatedJob);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update job' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id') || undefined;
        if (!id) {
            return NextResponse.json({ error: 'Job ID is required' }, { status: 400 });
        }
        await prisma.job.delete({
            where: { id },
        });
        return NextResponse.json({ message: 'Job deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 });
    }
}