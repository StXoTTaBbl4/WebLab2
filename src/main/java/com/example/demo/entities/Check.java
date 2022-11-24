package com.example.demo.entities;

import java.time.ZonedDateTime;
import java.util.Calendar;


public class Check{
    protected int x,y,r;
    protected boolean hitFact;
    protected ZonedDateTime time;
    protected long scriptTime;

    public Check(int x, int y, int r, boolean hitFact, ZonedDateTime time, long scriptTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.hitFact = hitFact;
        this.time = time;
        this.scriptTime = scriptTime;
    }

    public int x() {
        return x;
    }

    public int y() {
        return y;
    }

    public int r() {
        return r;
    }

    public boolean hitFact() {
        return hitFact;
    }

    public ZonedDateTime time() {
        return time;
    }

    public long scriptTime() {
        return scriptTime;
    }
}
