package com.example.demo.model;

import com.example.demo.entities.Check;

import java.util.ArrayList;
import java.util.List;

public class Model {
    private static Model instance = new Model();

    private List<Check> model;

    public static Model getInstance() {
        return instance;
    }

    private Model() {
        model = new ArrayList<>();
    }

    public void add(Check attempt) {
        model.add(attempt);
    }

    public List<Check> list() {
        return  model;
    }
}
